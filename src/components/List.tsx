import { useState } from 'react';
import Item from './Item';
import { ItemListProps } from '../intefaces/Item';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import '../style/List.css'

const List: React.FC = () => {
    const [items, setItems] = useState<ItemListProps[]>([]);
    const [rename, setRename] = useState<string>('');

    const addItem = (parentId: number | null) => {
        const newItem: ItemListProps = {
            id: Date.now(),
            name: rename || `Item ${items.length + 1}`,
            children: []
        }

        const addItemToList = (list: ItemListProps[], parentId: number | null): ItemListProps[] => {
            return list.map(item => {
                if (item.id === parentId) {
                    return { ...item, children: [...item.children, newItem] };
                } else if (item.children) {
                    return { ...item, children: addItemToList(item.children, parentId) };
                }
                return item;
            });
        };

        if (parentId === null) {
            setItems([...items, newItem]);
        } else {
            setItems(addItemToList(items, parentId));
        }

        setRename('');
    }

    const editItem = (id: number, newName: string) => {
        const editItemInList = (list: ItemListProps[]): ItemListProps[] => {
            return list.map(item => {
                if (item.id === id) {
                    return { ...item, name: newName };
                } else if (item.children) {
                    return { ...item, children: editItemInList(item.children) };
                }
                return item;
            });
        };

        setItems(editItemInList(items));
    };

    const renderItems = (list: ItemListProps[], currentLevel = 1): JSX.Element[] => {
        return list.map(item => (
            <Item
                key={item.id}
                item={item}
                addItem={addItem}
                editItem={editItem}
                currentLevel={currentLevel}
                maxNestingLevel={3}
            />
        ));
    };

    return (
        <>
            <div className='input-div'>
                <Input
                    type="text"
                    prefix={<PlusCircleOutlined />}
                    value={rename}
                    onChange={(e) => setRename(e.target.value)}
                    placeholder="Create a List"
                    className='input'
                />
                <button className='btn' onClick={() => addItem(null)}>Add List</button>
            </div>
            <div className="items">
                {renderItems(items)}
            </div>
        </>
    )
}

export default List