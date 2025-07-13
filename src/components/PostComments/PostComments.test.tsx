import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários na lista', () => {
        render(<Post />);
        const input = screen.getByTestId('comment-input');
        const button = screen.getByTestId('submit-button');

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        const comments = screen.getAllByTestId('comment-item');
        expect(comments).toHaveLength(2);
        expect(comments[0]).toHaveTextContent('Primeiro comentário');
        expect(comments[1]).toHaveTextContent('Segundo comentário');
    });
});