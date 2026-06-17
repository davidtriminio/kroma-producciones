import SectionTitle from "./SectionTitle";

const portfolioItems = [
    {
        span: "col-span-2 row-span-2",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCmHUKN0l7vvpB1MMH0NSESeUqxQCKdS3NT1qCMJrfY6_5tPcuvOcS4vi1ZQncrkdjvB0wdc-nI2e4NfPngb6YMdu1fKou_WbXQWvAHRy72djN7YMX-E4FiIiItmr-rtIhzz6uHUEgKoXiPiRjBCdpGaLeBgyVz2RE4zjVYl7933vTHyzZNeWXfIjjAG7OCnZnotpobuHFCVkzEDSgcdclh5rhyoyHsGawhb-dkpn8TdfMip689y6Q0A3UK5SY2ImjvB2LAOgtIHvHl",
        tag: "Audiovisual",
        title: "Campaña Global 'Vision'",
    },
    {
        span: "col-span-2 row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD72I69Hh5_Gbpzovtxj5pYnZNfYPpdmceZLV0j5TyTYF3kMfr2i229IKpMokpjpu3aFUggZPFNedVCXy5tDiO9inuiXLOQ-M3dlyzNS2wJ6YVP7RA1YrxhS5SAMZbQ8611IpQtbkY9PqAwNfyjOGY2Jme6h_-hVTf4sT6CNpMxDTT0hsnU67cJ_5UzYuJlYFw-hSJ6O03V122XSBYPXhUOKg2hZgPB8LAyYUYDNerKp6FXfX_CulT2VoPdTJPt6MtR-CVroMVCfHV3",
        tag: "Branding",
        title: "Identidad Tech Solutions",
    },
    {
        span: "col-span-1 row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDp6H4yW-rfiW8wgmQxWAXLJbZWDzW1KfLE0kOFNNEigPlOjaHmTmITTjse00r1Td2sWs9cE1GV6BhXhfpJfUlArT5KqHdIzrmeM_Ta3VSYAAZ7e-vYMZlQxYfYJGnAVkaTiz2Tpeg4jhmfSMth3D32ZL0CHglzkWbbW-CilmmwhIQBvwTEyeeMq0HDTH1BC8cFjbPzRA4E-q7mz3vq3TIRG3JkOzK7hfm1fHpFvZlMC1dX4UQBzviXZcwYq6blzjKaAHs-Yj2qO23B",
        tag: "Web",
        title: "E-commerce Ultra",
    },
    {
        span: "col-span-1 row-span-1",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCvr6_MLcKud5W4dL5dwumfWpqbLH--sQfu_eDtMQiEB6RJdnXu1Ctu1jxF4pbY39khxSnIG2W_KdU_rOEC2l_ea0_G9Ew5UfY8OIQ_JavYJ5jv61tNqJmo0IrpOh1dLN2dOMP_fZerK4gqjNOMeM9j-49B1_vnNX9qHRCycPb0L1zbUqMgzk9YJGTzTubumnceSz1mspGGSSjj12dMTx9WdLlAn9_xXFcER3g4J9qgJlojnDkTa-iOtxnMDHpLg2jV6DlRJzGW9MAi",
        tag: "Social Media",
        title: "Contenido Viral",
    },
];

export default function Portfolio() {
    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="portfolio">
            <SectionTitle className="mb-16">Nuestro Trabajo</SectionTitle>

            <div data-reveal className="grid h-[600px] grid-cols-2 grid-rows-2 gap-4  md:grid-cols-4">
                {portfolioItems.map((item) => (
                    <div key={item.title} className={`${item.span} group relative overflow-hidden rounded-kp`}>
                        <img
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            src={item.image}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                            <span className="mb-2 text-xs font-bold uppercase tracking-widest text-kp-cyan">{item.tag}</span>
                            <h4 className="font-headline text-2xl font-black md:text-3xl">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}