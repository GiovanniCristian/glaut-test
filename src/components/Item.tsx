import React from 'react';
import RenameItem from './RenameItem';
import { ItemProps } from '../intefaces/Item';
import '../style/Item.css'

const Item: React.FC<ItemProps> = ({ item, addItem, editItem, currentLevel, maxNestingLevel }) => {
    return (
        <div className="item" style={{ marginLeft: currentLevel * 30 }}>
            <RenameItem item={item} editItem={editItem} />
            {currentLevel < maxNestingLevel && (
                <button className='child-btn' onClick={() => addItem(item.id)}>Add new</button>
            )}
            {item.children && item.children.length > 0 && (
                <div className="children">
                    {item.children.map(child => (
                        <Item
                            key={child.id}
                            item={child}
                            addItem={addItem}
                            editItem={editItem}
                            currentLevel={currentLevel + 1}
                            maxNestingLevel={maxNestingLevel}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Item;
