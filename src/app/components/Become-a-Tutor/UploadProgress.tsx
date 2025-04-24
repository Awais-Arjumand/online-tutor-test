import React from "react";

interface UploadProgressProps {
  fileName: string;
  progress: number;
  onClose: () => void;
}

export const UploadProgress: React.FC<UploadProgressProps> = ({
  fileName,
  progress,
  onClose,
}) => {
  return (
    <div className="relative p-5 mt-5 w-full bg-white rounded-md max-w-[886px] shadow-[0_4px_13.8px_rgba(190,190,190,0.25)] max-sm:-mx-5 max-sm:my-5 max-sm:w-[calc(100%_+_40px)]">
      <div className="flex gap-6 items-center">
        <div className="h-[53px] w-[53px]">
          <div
            dangerouslySetInnerHTML={{
              __html: `<svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.7519 37.825C44.7519 37.905 44.7837 37.9817 44.8402 38.0382C44.8967 38.0947 44.9734 38.1265 45.0533 38.1265C45.1333 38.1265 45.21 38.0947 45.2665 38.0382C45.323 37.9817 45.3548 37.905 45.3548 37.825C45.3548 37.7451 45.323 37.6684 45.2665 37.6119C45.21 37.5554 45.1333 37.5236 45.0533 37.5236C44.9734 37.5236 44.8967 37.5554 44.8402 37.6119C44.7837 37.6684 44.7519 37.7451 44.7519 37.825ZM38.0971 44.6918C38.0971 44.8509 38.1603 45.0034 38.2727 45.1158C38.3851 45.2282 38.5376 45.2914 38.6967 45.2914C38.8557 45.2914 39.0082 45.2282 39.1206 45.1158C39.2331 45.0034 39.2962 44.8509 39.2962 44.6918C39.2962 44.5328 39.2331 44.3803 39.1206 44.2679C39.0082 44.1554 38.8557 44.0923 38.6967 44.0923C38.5376 44.0923 38.3851 44.1554 38.2727 44.2679C38.1603 44.3803 38.0971 44.5328 38.0971 44.6918Z" fill="#A435F0"/></svg>`,
            }}
          />
        </div>
        <div className="w-0.5 bg-stone-900 bg-opacity-30 h-[73px]" />
        <div className="flex-1">
          <p className="mb-5 text-xl text-stone-900">
            <span>File </span>
            <span className="font-bold">{fileName}</span>
            <span> is uploading...</span>
          </p>
          <div className="overflow-hidden w-full h-3 bg-purple-600 bg-opacity-0 rounded-[45px]">
            <div
              className="h-full bg-purple-600 rounded-[45px_0_0_45px]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <button onClick={onClose} className="absolute top-0 right-0">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.970703" width="24" height="24" rx="12" fill="#A435F0" />
            <path
              d="M17.9707 7L7.9707 17M7.9707 7L17.9707 17"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
