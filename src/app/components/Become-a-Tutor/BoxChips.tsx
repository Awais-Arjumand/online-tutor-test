import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';

interface BoxChipsProps {
  ChipsData: string[];
  val2: string[];
  onEmpty?: () => void;
  onDeleteAll?: () => void; 
  showDeleteAll?: boolean; 
}

const BoxChips = ({ ChipsData, val2, onEmpty,  }: BoxChipsProps) => {
  const [chips, setChips] = useState<{class: string; subject: string}[]>([]);

  useEffect(() => {
    const combined = ChipsData.map((cls, i) => ({
      class: cls,
      subject: val2[i] || ''
    })).filter(chip => chip.class || chip.subject);
    setChips(combined);
  }, [ChipsData, val2]);

  const handleDelete = (index: number) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);

    if (newChips.length === 0 && onEmpty) {
      onEmpty();
    }
  };

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 flex-wrap">
        {chips.map((chip, index) => (
          <div
            key={`${chip.class}-${chip.subject}-${index}`}
            className="w-fit px-3 py-1.5 flex items-center gap-x-2 border border-gray-400 rounded-2xl"
          >
            <span className="text-sm font-medium">
              {chip.class} | {chip.subject}
            </span>
            <div
              onClick={() => handleDelete(index)}
              className="w-4 h-4 rounded-full bg-red-500 flex justify-center items-center cursor-pointer text-white"
            >
              <RxCross2 className="text-xs" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxChips;