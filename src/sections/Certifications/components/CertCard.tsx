import type { Certification } from '../../../data/certifications'

interface CertCardProps {
  certification: Certification
}

const CertCard = ({ certification }: CertCardProps) => (
  <div className="card-notch-sm border-border flex items-start gap-4 border bg-white p-5.5">
    <div className="seal-notch bg-navy flex h-11 w-11 shrink-0 items-center justify-center font-mono text-[11px] font-bold text-white">
      {certification.seal}
    </div>
    <div>
      <p className="font-display text-navy-deep text-[15px] font-bold">
        {certification.name}
      </p>
      <p className="text-gray-light mt-1 font-mono text-[11.5px]">
        {certification.issuer}
      </p>
      <p className="mt-2.5 flex flex-col gap-3.5">
        <span className="text-gray-light font-mono text-[11px]">
          Código: {certification.code}
        </span>
        <a
          href={certification.verifyUrl}
          target="_blank"
          rel="noopener"
          className="text-navy font-mono text-[11.5px] font-semibold hover:underline"
        >
          Verificar certificado →
        </a>
      </p>
    </div>
  </div>
)

export default CertCard
