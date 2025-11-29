import React from 'react';
import type { SubLink } from '../types';

interface DropdownItemProps {
  link: SubLink;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ link }) => {
    const Icon = link.icon;
    return (
        <a 
            href={link.href} 
            className="flex items-start p-4 hover:bg-gray-50 transition duration-150 rounded-lg group"
        >
            {Icon && <Icon className="w-6 h-6 mr-3 text-blue-500 group-hover:text-blue-700 flex-shrink-0" />}
            <div>
                <p className="font-semibold text-gray-900 group-hover:underline">{link.label}</p>
                <p className="text-sm text-gray-500">{link.description}</p>
            </div>
        </a>
    );
};

export default DropdownItem;
