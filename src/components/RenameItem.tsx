import React, { useState } from 'react';
import { RenameProps } from '../intefaces/Item';

const EditableItemName: React.FC<RenameProps> = ({ item, editItem }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>(item.name);

    const handleEdit = () => {
        setIsEditing(false);
        editItem(item.id, name);
    };

    return (
        <span>
            {isEditing ? (
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === 'Escape') handleEdit();
                    }}
                />
            ) : (
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsEditing(true)}
                >{item.name}</span>
            )}
        </span>
    );
};

export default EditableItemName;
