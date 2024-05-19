def calssificadorDeNivel(nome, xp):
        nivel = ""
        if xp >= 1.001 and xp <= 2.000:
            nivel = "Bronze"
        elif xp >= 2.001 and xp <= 5.000:
            nivel = "Prata"
        elif xp >= 5.001 and xp <= 7.000:
            nivel = "Ouro"
        elif xp >= 7.001 and xp <= 8.000:
            nivel = "Platina"
        elif xp >= 8.001 and xp <= 9.000:
            nivel = "Ascendente"
        elif xp >= 9.001 and xp <= 10.000:
            nivel = "Imortal"
        elif xp >= 10.001:
            nivel = "Radiante" 
        else:
            nivel = "Ferro"
        return f"O Heroi de nome {nome} esta no nivel de {nivel}"


nome = "Batman"
xp = 1.001

resultado = calssificadorDeNivel(nome, xp)

print(resultado)