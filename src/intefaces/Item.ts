export interface ItemListProps {
    id: number,
    name: string,
    children: ItemListProps[];
}

export interface ItemProps {
    item: {
        id: number;
        name: string;
        children: ItemProps['item'][];
    };
    addItem: (parentId: number) => void;
    editItem: (id: number, newName: string) => void;
    currentLevel: number;
    maxNestingLevel: number;
}

export interface RenameProps {
    item: {
        id: number;
        name: string;
    };
    editItem: (id: number, newName: string) => void;
}