import { Close, ContentCopy } from "@mui/icons-material";

const DetailHeader = ({ title, sign, input, blueText, icon }) => {
  const icons = {
    ContentCopy: <ContentCopy className="text-sm text-gray-500" />,
    Close: <Close className="text-sm text-gray-500" />,
  };
  return (
    <div className="flex items-center justify-between mt-3">
      <div>
        <h4 className="text-xs">
          {title} {sign && <span className="text-red-500">{sign}</span>}
        </h4>
        <p className={`${blueText && "text-blue-700"} text-xs`}>{input}</p>
      </div>
      {icon && icons[icon]}
    </div>
  );
};

export default DetailHeader;
