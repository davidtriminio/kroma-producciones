import SectionTitle from "./SectionTitle";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef} from "react";
import KromaImage from "./KromaImage.tsx";

const portfolioItems = [
    {
        span: "md:col-span-2 md:row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHUKN0l7vvpB1MMH0NSESeUqxQCKdS3NT1qCMJrfY6_5tPcuvOcS4vi1ZQncrkdjvB0wdc-nI2e4NfPngb6YMdu1fKou_WbXQWvAHRy72djN7YMX-E4FiIiItmr-rtIhzz6uHUEgKoXiPiRjBCdpGaLeBgyVz2RE4zjVYl7933vTHyzZNeWXfIjjAG7OCnZnotpobuHFCVkzEDSgcdclh5rhyoyHsGawhb-dkpn8TdfMip689y6Q0A3UK5SY2ImjvB2LAOgtIHvHl",
        tag: "Audiovisual",
        title: "Campaña Global 'Vision'",
    },
    {
        span: "md:col-span-2 md:row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD72I69Hh5_Gbpzovtxj5pYnZNfYPpdmceZLV0j5TyTYF3kMfr2i229IKpMokpjpu3aFUggZPFNedVCXy5tDiO9inuiXLOQ-M3dlyzNS2wJ6YVP7RA1YrxhS5SAMZbQ8611IpQtbkY9PqAwNfyjOGY2Jme6h_-hVTf4sT6CNpMxDTT0hsnU67cJ_5UzYuJlYFw-hSJ6O03V122XSBYPXhUOKg2hZgPB8LAyYUYDNerKp6FXfX_CulT2VoPdTJPt6MtR-CVroMVCfHV3",
        tag: "Branding",
        title: "Identidad Tech Solutions",
    },
    {
        span: "md:col-span-2 md:row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDp6H4yW-rfiW8wgmQxWAXLJbZWDzW1KfLE0kOFNNEigPlOjaHmTmITTjse00r1Td2sWs9cE1GV6BhXhfpJfUlArT5KqHdIzrmeM_Ta3VSYAAZ7e-vYMZlQxYfYJGnAVkaTiz2Tpeg4jhmfSMth3D32ZL0CHglzkWbbW-CilmmwhIQBvwTEyeeMq0HDTH1BC8cFjbPzRA4E-q7mz3vq3TIRG3JkOzK7hfm1fHpFvZlMC1dX4UQBzviXZcwYq6blzjKaAHs-Yj2qO23B",
        tag: "Web",
        title: "E-commerce Ultra",
    },
    {
        span: "md:col-span-2 md:row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCvr6_MLcKud5W4dL5dwumfWpqbLH--sQfu_eDtMQiEB6RJdnXu1Ctu1jxF4pbY39khxSnIG2W_KdU_rOEC2l_ea0_G9Ew5UfY8OIQ_JavYJ5jv61tNqJmo0IrpOh1dLN2dOMP_fZerK4gqjNOMeM9j-49B1_vnNX9qHRCycPb0L1zbUqMgzk9YJGTzTubumnceSz1mspGGSSjj12dMTx9WdLlAn9_xXFcER3g4J9qgJlojnDkTa-iOtxnMDHpLg2jV6DlRJzGW9MAi",
        tag: "Social Media",
        title: "Contenido Viral",
    },
];

export default function Portfolio() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollPortfolio = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const card = carousel.querySelector<HTMLElement>("article");
        const cardWidth = card?.offsetWidth ?? carousel.clientWidth;
        const gap = 16;

        carousel.scrollBy({
            left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
            behavior: "smooth",
        });
    };
    return (
        <section className="container-max mx-auto overflow-hidden px-gutter py-section-gap" id="portfolio">
            <div className="mb-12 flex items-end justify-between gap-6">
                <SectionTitle className="mb-0">Nuestro Trabajo</SectionTitle>

                <div className="flex gap-2 md:hidden">
                    <button
                        type="button"
                        aria-label="Ver proyecto anterior"
                        onClick={() => scrollPortfolio("left")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg/70 transition hover:border-fg/30 hover:bg-fg/10 hover:text-fg"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                    </button>

                    <button
                        type="button"
                        aria-label="Ver siguiente proyecto"
                        onClick={() => scrollPortfolio("right")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg/70 transition hover:border-fg/30 hover:bg-fg/10 hover:text-fg"
                    >
                        <ChevronRight className="h-4 w-4"/>
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                data-reveal
                className="
    flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5
    [-ms-overflow-style:none] [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    md:grid md:h-[600px] md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:pb-0
  "
            >
                {portfolioItems.map((item) => (
                    <article
                        key={item.title}
                        className={`
              ${item.span}
              group relative h-[390px] min-w-[82%] snap-center overflow-hidden rounded-kp
              border border-fg/10 bg-fg/[0.035]
              sm:min-w-[58%]
              md:h-auto md:min-w-0
            `}
                    >
                        <KromaImage
                            src={item.image}
                            alt={`${item.title} - proyecto de ${item.tag} por Kroma - Agencia Publicitaria`}
                            className="absolute inset-0 h-full w-full object-cover brightness-[0.72] saturate-[0.85] transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"/>

                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                {item.tag}
              </span>
                            <h3 className="font-headline text-xl font-black uppercase leading-none md:text-3xl">
                                {item.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}