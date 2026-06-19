import {SiFacebook, SiInstagram, SiWhatsapp} from "@icons-pack/react-simple-icons";

export default function Footer() {
    return (
        <footer className="w-full border-t border-surface-border bg-kp-graphite px-gutter py-20">
            <div className="container-max mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
                <div className="flex flex-col items-center gap-6 md:items-start">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Logo"
                            className="h-10 w-auto"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfk7388uAWvtpkxT2I0xIYyGd5sgZEpsYxPgBNiZ71mooaVMhkeNNVpEldnpaEp9MWdrI350HyzNQi--7ozmHJSGW9ATywBeRRkG9nhHyU_-owcYXAices-9xeT5WVz1PGLGYgAOB_91B2xbDzvQ7AC3oDgBQ5qZp3Qbjg3jLFfMKOBcH_mFUhGw0viiVpRxKU5lzFAjDgV3bgC19_gbgdju2oBUl0HAuYjwQyhiyvfufoqt_lkQ-6nhNclSEEdQJ7Se8QTpSMGqS2"
                        />
                        <span className="font-headline text-3xl font-black tracking-tighter text-white">KROMA PRODUCCIONES</span>
                    </div>
                    <p className="text-center text-[10px] font-bold tracking-[0.2em] text-on-surface-variant md:text-left">
                        © 2026 KROMA PRODUCCIONES.
                    </p>
                </div>

                <div className="flex gap-12">
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-white" href="#">
                        <SiInstagram className="h-5 w-5" strokeWidth={2.4} color={"#c1558b"}/>Instagram
                    </a>
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-white" href="#">
                        <SiFacebook className="h-5 w-5" strokeWidth={2.4} color={"#3b5998"}/> Facebook
                    </a>
                    <a className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant transition-all hover:text-white" href="#">
                        <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/> WhatsApp
                    </a>
                </div>
            </div>
        </footer>
    );
}