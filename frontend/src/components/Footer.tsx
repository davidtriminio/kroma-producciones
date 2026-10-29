import Logo from "./Logo";
import {SiFacebook, SiInstagram, SiWhatsapp} from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer className="w-full border-t border-surface-border bg-surface px-gutter py-20">
            <div className="container-max mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
                <div className="flex flex-col items-center gap-6 md:items-start">
                    <div className="flex items-center gap-4">
                        <Logo size="sm" className="h-12 w-auto" />
                        <span className="flex flex-col leading-none">
                            <span className="font-headline text-3xl font-black tracking-wide text-fg">KROMA</span>
                            <span className="mt-1.5 text-[10px] font-light uppercase tracking-[0.32em] text-on-surface-variant">Agencia Publicitaria</span>
                        </span>
                    </div>
                    <p className="text-center text-[10px] font-bold tracking-[0.2em] text-on-surface-variant md:text-left">
                        © 2026 KROMA - AGENCIA PUBLICITARIA.
                    </p>
                </div>

                <div className="flex gap-12">
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-fg" href="https://www.instagram.com/kroma_producciones" target="_blank" rel="noopener noreferrer">
                        <SiInstagram className="h-5 w-5" strokeWidth={2.4} color={"#c1558b"}/>Instagram
                    </a>
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-fg" href="https://www.facebook.com/profile.php?id=61578765474884" target="_blank" rel="noopener noreferrer">
                        <SiFacebook className="h-5 w-5" strokeWidth={2.4} color={"#3b5998"}/> Facebook
                    </a>
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-fg" href="https://wa.me/50488434254" target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/> WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}