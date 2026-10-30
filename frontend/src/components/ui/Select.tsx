import {type KeyboardEvent, useEffect, useId, useMemo, useRef, useState} from "react";
import {Check, ChevronDown} from "lucide-react";

export type SelectGroup = {
    label: string;
    options: { value: string; label: string }[];
};

type Props = {
    id: string;
    value: string;
    groups: SelectGroup[];
    placeholder: string;
    invalid?: boolean;
    valid?: boolean;
    describedBy?: string;
    onChange: (value: string) => void;
    onBlur?: () => void;
};

// Accessible listbox that replaces the native <select>, whose popup can't follow the site theme.
export default function Select({id, value, groups, placeholder, invalid, valid, describedBy, onChange, onBlur}: Props) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);
    const rootRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLUListElement | null>(null);
    const listId = useId();

    const flat = useMemo(() => groups.flatMap((group) => group.options), [groups]);
    // First flat index of each group, so options keep one running index across groups.
    const offsets = useMemo(
        () => groups.map((_, index) => groups.slice(0, index).reduce((total, group) => total + group.options.length, 0)),
        [groups]
    );
    const selected = flat.find((option) => option.value === value);

    const openList = () => {
        const index = flat.findIndex((option) => option.value === value);
        setActive(index >= 0 ? index : 0);
        setOpen(true);
    };

    const closeList = () => {
        setOpen(false);
        onBlur?.();
    };

    const choose = (index: number) => {
        const option = flat[index];
        if (!option) return;

        onChange(option.value);
        setOpen(false);
        onBlur?.();
    };

    useEffect(() => {
        if (!open) return;

        const onPointerDown = (event: PointerEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
                onBlur?.();
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [open, onBlur]);

    useEffect(() => {
        if (!open) return;
        listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({block: "nearest"});
    }, [open, active]);

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        switch (event.key) {
            case "ArrowDown":
                event.preventDefault();
                if (!open) openList();
                else setActive((current) => Math.min(current + 1, flat.length - 1));
                break;
            case "ArrowUp":
                event.preventDefault();
                if (!open) openList();
                else setActive((current) => Math.max(current - 1, 0));
                break;
            case "Home":
                if (open) {
                    event.preventDefault();
                    setActive(0);
                }
                break;
            case "End":
                if (open) {
                    event.preventDefault();
                    setActive(flat.length - 1);
                }
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                if (open) choose(active);
                else openList();
                break;
            case "Escape":
                if (open) {
                    event.preventDefault();
                    closeList();
                }
                break;
            case "Tab":
                if (open) closeList();
                break;
        }
    };

    return (
        <div className="custom-select" ref={rootRef}>
            <button
                type="button"
                id={id}
                className={`form-control custom-select-trigger${valid ? " is-valid" : ""}${selected ? "" : " is-placeholder"}`}
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listId}
                aria-invalid={invalid ? true : undefined}
                aria-describedby={describedBy}
                onClick={() => (open ? closeList() : openList())}
                onKeyDown={onKeyDown}
            >
                <span className="truncate">{selected?.label ?? placeholder}</span>
                <ChevronDown className={`custom-select-chevron${open ? " is-open" : ""}`} aria-hidden="true"/>
            </button>

            {open && (
                <ul id={listId} ref={listRef} role="listbox" aria-labelledby={id} className="custom-select-list">
                    {groups.map((group, groupIndex) => (
                        <li key={group.label} role="presentation">
                            <p className="custom-select-group" role="presentation">{group.label}</p>
                            <ul role="group" aria-label={group.label}>
                                {group.options.map((option, optionPosition) => {
                                    const index = offsets[groupIndex] + optionPosition;
                                    const isSelected = option.value === value;

                                    return (
                                        <li
                                            key={option.value}
                                            role="option"
                                            aria-selected={isSelected}
                                            data-index={index}
                                            className={`custom-select-option${index === active ? " is-active" : ""}${isSelected ? " is-selected" : ""}`}
                                            onMouseEnter={() => setActive(index)}
                                            onMouseDown={(event) => event.preventDefault()}
                                            onClick={() => choose(index)}
                                        >
                                            <span>{option.label}</span>
                                            {isSelected && <Check className="h-4 w-4 shrink-0" aria-hidden="true"/>}
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
