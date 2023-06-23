produtos = ('Lápis', 1.75, 'Borracha', 2, 'Caderno', 15.90, 'Estojo', 25, 'Transferidor', 4.20, 'Compasso', 9.99, 'Mochila', 120.32, 'Canetas', 22.30, 'Livro', 34.90)

for pos, c in enumerate(produtos):
    if pos % 2 == 0:
        produto = c
    else:
        valor = c
        if len(str(valor)) == 2:
            diferença = 1
        elif len(str(valor)) == 3:
            diferença = 2
        elif len(str(valor)) == 4:
            diferença = 3
        elif len(str(valor)) == 6:
            diferença = 5
        else:
            diferença = 0
        pontos = 40 - len(str(produto)) - diferença
        print(f'{produto}{"." * pontos}R${valor}')
