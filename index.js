
function prletMissingElements(arr, N) {
    let diff = arr[0] - 0;
    let missing = "";

    for (let i = 0; i < N; i++) {
        if (arr[i] - i != diff) {
            while (diff < arr[i] - i) {
                missing += (i + diff) + " ";
                diff++;
            }
        }
    }
    return missing;
}

function findMissingElements() {
    const arrayInput = document.getElementById("missingElementsInput").value.trim();
    const arr = arrayInput.split(',').map(Number);
    const N = arr.length;

    if (arr.some(isNaN)) {
        document.getElementById("missingElementsResult").innerText = "Please enter valid numbers separated by commas.";
        return;
    }

    const missingElements = prletMissingElements(arr, N);

    if (missingElements === "") {
        document.getElementById("missingElementsResult").innerText = "No missing elements found.";
    } else {
        document.getElementById("missingElementsResult").innerText = "Missing elements: " + missingElements;
    }
}

function setMini(A) {
    let mini = Infinity;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < mini) {
            mini = A[i];
        }
    }
    return mini;
}

function setMaxi(A) {
    let maxi = -Infinity;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > maxi) {
            maxi = A[i];
        }
    }
    return maxi;
}

function findMinMax() {
    const arrayInput = document.getElementById("minMaxInput").value.trim();
    const A = arrayInput.split(',').map(Number);

    if (A.some(isNaN)) {
        document.getElementById("minMaxResult").innerText = "Please enter valid numbers separated by commas.";
        return;
    }

    const min = setMini(A);
    const max = setMaxi(A);

    document.getElementById("minMaxResult").innerText = "Minimum element is: " + min + ", Maximum element is: " + max;
}

function validatePalindrome() {
    const string = document.getElementById("palindromeInput").value.trim();

    if (string === "") {
        document.getElementById("palindromeResult").innerText = "Please enter a string or number.";
        return;
    }

    const reversedString = string.split('').reverse().join('');

    if (string === reversedString) {
        document.getElementById("palindromeResult").innerText = "It is a palindrome.";
    } else {
        document.getElementById("palindromeResult").innerText = "It is not a palindrome.";
    }
}