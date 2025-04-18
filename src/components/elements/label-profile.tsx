interface LabelProfileProps {
  label: string;
  required?: boolean;
  children?: React.ReactNode;
  errMessage?: string;
}

function LabelProfile(props: LabelProfileProps) {
  const { label, required, children, errMessage } = props;

  return (
    <div>
      {label && (
        <label className="text-md font-semibold mb-4 inline-block">
          {label} {required && <span className="text-md font-semibold">*</span>}
        </label>
      )}

      <div>{children}</div>

      {errMessage && (
        <span className="text-red-500 text-sm mt-2 italic">{errMessage}</span>
      )}
    </div>
  );
}

export default LabelProfile;
