def myParse(string: str):
    return list(string.strip())

#Ouvrir et parser le fichier
input = open("input.txt", "r")
inputArray = input.readlines()
parsedInput = list(map(myParse, inputArray))

def neighboursIndex(index: list[int]) -> list[list[int]]:
    i, j = index
    letter = parsedInput[i][j]
    neighbours = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]
    valid_neighbours = []
    for x, y in neighbours:
        if 0 <= x < len(parsedInput) and 0 <= y < len(parsedInput[0]) and letter == parsedInput[x][y]:
            valid_neighbours.append([x,y])
    return valid_neighbours



def regionCost(index: list[int], histo = None, perimeter = 0):
    i, j = index

    if histo is None:
        histo = []
    
    if([i,j] in histo):
        return { "perimeter": perimeter, "histo": histo}
    
    letter = parsedInput[i][j]
    neighsIndex = neighboursIndex([i,j])

    perimeter += 4-len(neighsIndex)


    histo.append([i,j])

    for nIndex in neighsIndex:
        if(parsedInput[nIndex[0]][nIndex[1]] == letter):   
            recRet = regionCost(nIndex, histo, perimeter)
            perimeter = recRet["perimeter"]
            for elt in recRet["histo"]:
                if elt not in histo:
                    histo.append(elt)
    return { "perimeter": perimeter, "histo": histo}
            
regionsInfo = []
totalHisto = []
for i in range(len(parsedInput)):
    for j in range(len(parsedInput[i])):
        if [i,j] not in totalHisto:
            result = regionCost([i,j])
            regionsInfo.append({"perimeter": result["perimeter"], "area": len(result["histo"])})
            for elt in result["histo"]:
                if elt not in totalHisto:
                    totalHisto.append(elt)
totalCost = 0
for info in regionsInfo:
    totalCost += info["area"]*info["perimeter"]
print(regionsInfo)
print(totalCost)



