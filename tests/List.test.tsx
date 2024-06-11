import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from '../src/components/List';
import Item from '../src/components/Item';
import RenameItem from '../src/components/RenameItem';

describe('List Component', () => {
    test('should add a list', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(typeof List);
        const input = getByPlaceholderText('Create a List');
        const button = getByText('Add List');

        fireEvent.change(input, { target: { value: 'New Item' } });
        fireEvent.click(button);

        expect(queryByText('New Item')).toBeInTheDocument();
    });

    test('should add a child item', () => {
        const { getByPlaceholderText, getByText, queryByText } = render(typeof Item);
        const input = getByPlaceholderText('Create an Item');
        const button = getByText('Add Item');

        fireEvent.change(input, { target: { value: 'Parent Item' } });
        fireEvent.click(button);

        const addChildButton = getByText('Add Child');
        fireEvent.click(addChildButton);

        expect(queryByText('Parent Item')).toBeInTheDocument();
        expect(queryByText('Item 1')).toBeInTheDocument();
    });

    test('should edit an item name', () => {
        const { getByPlaceholderText, getByText, getByDisplayValue, queryByText } = render(typeof RenameItem);
        const input = getByPlaceholderText('Create a List');
        const button = getByText('Add Item');

        fireEvent.change(input, { target: { value: 'Item to Edit' } });
        fireEvent.click(button);

        const item = getByText('Item to Edit');
        fireEvent.click(item);

        const editInput = getByDisplayValue('Item to Edit');
        fireEvent.change(editInput, { target: { value: 'Edited Item' } });
        fireEvent.blur(editInput);

        expect(queryByText('Edited Item')).toBeInTheDocument();
    });
});
