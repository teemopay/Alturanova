import Image from "next/image";

export default function FooterPage() {
  const data = [
    {
      title: "Áreas de Servicio",
      children: [
        {
          title: "Big Data y AI",
          link: "/Service",
        },
        {
          title: "Desarrollo de Software",
          link: "/Service",
        },
        {
          title: "Servicios de Publicidad",
          link: "/Service",
        },
        {
          title: "Consultoría Empresarial",
          link: "/Service",
        },
      ],
    },
    {
      title: "Introducción de la Empresa",
      children: [
        {
          title: "Casos de Éxito",
          link: "/Case",
        },
        {
          title: "Contáctanos",
          link: "/About",
        },
      ],
    },
  ];
  return (
    <div className="w-full pt-[50px] pb-[38px] px-[40px]  bg-[#050F19]">
      <div className="max-w-[1200px]  m-auto">
        <div className="lg:flex justify-start items-start mb-[93px]">
          <div className="md:mr-[136px] mb-[40px] lg:mb-0">
            <a href="/" className="block max-w-[232px] max-h-[40px] mb-[62px]">
              <Image src="/img/logo-2.png" alt="logo" width={232} height={40} />
            </a>

            <a href="/" className="block text-[14px] text-[#fff] mb-[13px]">
              Correo electrónico: operador@alturanova.cl
            </a>
            <div className="block text-[14px] text-[#fff] mb-[13px]">
              Dirección: HUERFANOS 1178, OF 224, 226, 228, 230 NULL 226 SANTIAGO
            </div>
            <div className="block text-[14px] text-[#fff]">
              Horario de atención: 9:30 a. m. - 6:30 p. m.
            </div>
          </div>
          <div className="flex-1  grid-cols-2 sm:grid">
            {data.map((i, index) => {
              return (
                <div key={index} className="mb-[40px] sm:mb-0">
                  <div className="text-[16px] text-white mb-[24px] font-bold">
                    {i.title}
                  </div>
                  {i.children.map((s, si) => {
                    return (
                      <a
                        key={si}
                        href={s.link}
                        className="block text-[12px] text-[#fff] mb-[13px] hover:text-[#0077FF]"
                      >
                        {s.title}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center text-[14px] text-[rgba(255,255,255,0.48)]  border-t border-[#2E408F] pt-[22px]">
          Copyright © 2025 Alturanova
        </div>
      </div>
    </div>
  );
}
