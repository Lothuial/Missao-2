const swap = (vector, posit1, posit2) => {
    [vector[posit1], vector[posit2]] = [vector[posit2], vector[posit1]];
}

const shuffle = (vector, amountSwaps) => {
    const vectorLength = vector.length;

    for (let i = 0; i < amountSwaps; i++) {
        const index1 = Math.floor(Math.random() * vectorLength);
        const index2 = Math.floor(Math.random() * vectorLength);
        swap(vector, index1, index2);
    };
}

const bubbleSort = (vector) => {
    const vectorLength = vector.length;
    for (let i = 0; i < vectorLength; i++) {
        for (let j = 0; j < vectorLength - 1; j++) {
            if (vector[j] > vector[j + 1]) {
                swap(vector, j, j + 1);
            };
        };
    };
}

const selectionSort = (vector) => {
    const vectorLength = vector.length;
    for (let i = 0; i < vectorLength - 1; i++) {
        let indexMin = i;
        for (let j = i + 1; j < vectorLength; j++) {
            if (vector[j] < vector[indexMin]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            swap(vector, i, indexMin);
        }
    }
}

const quickSort = (vector, posInit = 0, posFin = vector.length - 1) => {
    if (posInit < posFin) {
        const indexPivot = particionamento(vector, posInit, posFin, vector[posFin]);
        quickSort(vector, posInit, indexPivot - 1);
        quickSort(vector, indexPivot + 1, posFin);
    }
}

const particionamento = (vector, posInit, posFin, pivot) => {
    let i = posInit -1
    for (let j = posInit; j < posFin; j++) {
        if (vector[j] < pivot) {
            i++;
            swap(vector, i, j);
        }
    }
    swap(vector, i + 1, posFin)
    return i + 1;
}
