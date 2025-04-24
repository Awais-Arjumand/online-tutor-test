import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

interface BoxChipsCoursesProps {
    ChipsData: string[];
    onEmpty?: () => void;
    showDeleteAll?: boolean;
}

const BoxChipsCourses = ({ ChipsData, onEmpty }: BoxChipsCoursesProps) => {
    const [chips, setChips] = useState<string[]>([]);
    
    useEffect(() => {
        setChips(ChipsData.filter(course => course));
    }, [ChipsData]);

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
                {chips.map((course, index) => (
                    <div
                        key={`${course}-${index}`}
                        className="w-fit px-3 py-1.5 flex items-center gap-x-2 border border-gray-400 rounded-2xl"
                    >
                        <span className="text-sm font-medium">
                            {course}
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
    )
}

export default BoxChipsCourses