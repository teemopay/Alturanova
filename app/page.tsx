"use client";
import Image from "next/image";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import { HoverEffect } from "../components/ui/card-hover-effect";
import AboutBlock from "../components/custom/AboutBlock";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export default function Home() {
  const rate = [
    {
      id: 1,
      title: "SerpienteDigital CTO",
      cnt: `“La colaboración con Alturanova ha transformado completamente nuestro modelo de operación digital. El sistema de gestión empresarial desarrollado a medida no solo es fácil de operar, sino que también logra la sincronización en tiempo real de los datos de todos los departamentos, reduciendo significativamente los costos de comunicación y mejorando la eficiencia laboral en un 40%. Su profunda comprensión de las necesidades del sector y su capacidad técnica profesional han hecho que nuestro camino de transformación digital sea excepcionalmente fluido.”`,
    },
    {
      id: 2,
      title: "NopalTech CMO",
      cnt: `“Las soluciones de marketing inteligente de Alturanova nos han traído resultados más allá de las expectativas. Gracias a la segmentación precisa de audiencia y la colocación integrada en múltiples canales, la visibilidad de nuestra marca ha aumentado tres veces en medio año, la tasa de conversión de clientes potenciales ha crecido un 50% en comparación con antes, y el retorno de la inversión está muy por encima del promedio de la industria. Son verdaderos socios profesionales que entienden tanto el marketing como la tecnología.”`,
    },
    {
      id: 3,
      title: "MayaSoft CEO",
      cnt: `“En términos de aplicación de tecnología AI, el equipo de Alturanova ha demostrado un alto nivel de competencia profesional. El sistema de análisis de comportamiento de usuarios que nos crearon nos ayudó a identificar con precisión las necesidades de los clientes, optimizar la dirección del diseño del producto, mejorar la satisfacción del producto en un 35% y lograr un crecimiento significativo en la tasa de retención de usuarios. Elegir a Alturanova ha sido una de nuestras decisiones más acertadas este año.”`,
    },
  ];
  const cards = [
    {
      id: 1,
      title: "Finanzas",
    },
    {
      id: 2,
      title: "Educación",
    },
    {
      id: 3,
      title: "Dispositivos Inteligentes",
    },
    {
      id: 4,
      title: "Publicidad",
    },
    {
      id: 5,
      title: "Retail",
    },
    {
      id: 6,
      title: "Big Data",
    },
    {
      id: 7,
      title: "AI",
    },
    {
      id: 8,
      title: "Salud",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-start w-full mt-[80px] min-h-[672px] md:max-h-[750px]  bg-[url('/img/home.png')] bg-cover bg-center bg-no-repeat px-[40px]">
        <div className="w-full max-w-[1200px] pt-[130px] pb-[130px]">
          <div className="md:max-w-[684px] text-left text-[40px] md:text-[58px] text-[#222222] font-bold mb-[28px]">
            Servicios empresariales seguros y estables
          </div>
          <div className="text-[14px] text-[#333] max-w-[692px]">
            Proveedor de soluciones tecnológicas especializado en el mercado
            chileno y latinoamericano, comprometido con ayudar a las empresas a
            destacarse en la era de la economía digital mediante el desarrollo
            de software personalizado, integración profunda de sistemas y
            estrategias innovadoras de marketing digital. Nuestro equipo central
            está formado por ingenieros de software experimentados, arquitectos
            de TI y expertos en marketing, con el objetivo de convertirnos en
            socios confiables y duraderos para las empresas, trabajando juntos
            hacia un futuro mejor.
          </div>
          <a href="/About">
            <button className="mt-[112px]  bg-[#0077FF] relative  h-[48px] w-full max-w-[180px] rounded-full  font-medium text-white cursor-pointer">
              Conoce Más
            </button>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-start px-[40px]">
        <div className="w-full max-w-[1200px] mt-[179px] mb-[87px]">
          <div className="lg:flex justify-center items-center mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-3.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Desarrollo de software y aplicaciones informáticas
              </div>
              <div className="text-[14px] leading-[24px]">
                Nos especializamos en desarrollar software y aplicaciones
                personalizadas de alto rendimiento y escalabilidad. Desde
                sistemas de gestión empresarial (ERP, CRM) y aplicaciones
                móviles multiplataforma hasta aplicaciones nativas en la nube,
                adoptamos un modelo de desarrollo ágil para ofrecer soluciones
                que no solo satisfacen las necesidades actuales, sino que
                también se adaptan al crecimiento futuro.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-4.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Asesoría en tecnologías de la información e integración de
                sistemas  
              </div>
              <div className="text-[14px] leading-[24px]">
                Ofrecemos servicios profesionales de consultoría estratégica en
                TI y integración de sistemas sin interrupciones. Ayudamos a
                evaluar arquitecturas tecnológicas, planificar rutas de
                transformación digital e integrar diversos sistemas y
                plataformas heterogéneas, eliminando islas de datos y
                construyendo un ecosistema tecnológico colaborativo y eficiente.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:mr-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-5.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Soluciones de Marketing Inteligente y Medios
              </div>
              <div className="text-[14px] leading-[24px]">
                Integramos recursos publicitarios de calidad global, ofreciendo
                servicios integrales de colocación de marketing que cubren
                medios físicos offline (ascensores, centros comerciales, nodos
                de transporte) y medios digitales online (plataformas sociales,
                anuncios de video, promoción en motores de búsqueda, feeds de
                contenido). La tecnología de segmentación precisa basada en
                análisis de big data garantiza que el mensaje de la marca
                alcance eficazmente a la audiencia objetivo y mejore la
                eficiencia de conversión.
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center items-center   flex-row-reverse mb-[100px]">
            <div className="lg:max-w-[548px] lg:max-h-[328px] lg:ml-[54px] mb-[20px]">
              <DirectionAwareHover imageUrl="/img/home-6.png">
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>
            <div className="flex-1">
              <div className="text-[26px] text-[#222222] mb-[30px] font-bold">
                Aplicaciones de inteligencia artificial y big data
              </div>
              <div className="text-[14px] leading-[24px]">
                Centrado en la implementación de tecnologías clave de IA y big
                data, ofrecemos servicios integrales que abarcan la
                recopilación, análisis, modelado y aplicación de datos.
                Incluimos soluciones como predicción inteligente, análisis del
                comportamiento del usuario, operaciones automatizadas y apoyo a
                decisiones inteligentes, ayudando a las empresas a extraer el
                valor de sus datos y mejorar la eficiencia operativa y la
                cientificidad de sus decisiones.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full min-h-[790px] lg:max-h-[790px]  bg-[url('/img/home-7.png')] bg-cover bg-center bg-no-repeat px-[40px] py-[40px]">
        <div className="w-full max-w-[1200px]">
          <div className="text-center text-[48px] leading-[58px] font-bold mb-[121px]">
            Opiniones de Nuestros Clientes
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative  gap-x-[22px] gap-y-[40px]">
            {rate.map((i, index) => {
              return (
                <div
                  className="rate relative text-center bg-[#fff]"
                  key={index}
                >
                  <Image
                    className="rate-top"
                    src={`/img/head-${i.id}.png`}
                    width={65}
                    height={65}
                    alt="rate"
                  />
                  <div className="text-[20px] font-bold mb-[10px] leading-[26px]">
                    {i.title}
                  </div>
                  <Image
                    className="m-auto"
                    src="/img/start.png"
                    width={93}
                    height={14}
                    alt="rate"
                  />
                  <div className="text-[14px] leading-[22px] text-left mt-[24px]">
                    {i.cnt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start px-[40px] bg-[#F5F8FA]">
        <div className="w-full max-w-[1200px] pt-[120px]">
          <div className="text-[48px] leading-[58px] font-bold text-center mb-[81px]">
            Sectores Aplicables
          </div>
          <HoverEffect className="mb-[186px]" items={cards} />
          <div className="mb-[160px]">
            <AboutBlock
              type="3"
              title="Somos Su Socio Digital Integral"
              sub="Desde el desarrollo de sitios web y aplicaciones hasta estrategias publicitarias precisas y consultoría empresarial profesional, ayudamos a que su empresa prospere en la era digital."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
