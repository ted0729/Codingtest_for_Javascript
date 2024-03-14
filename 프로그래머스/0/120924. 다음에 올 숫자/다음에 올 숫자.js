function solution(common) {
    const isArithmetic = (arr) => {
        const diff = arr[1] - arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== diff) {
                return false;
            }
        }
        return true;
    };

    const isGeometric = (arr) => {
        const ratio = arr[1] / arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] / arr[i - 1] !== ratio) {
                return false;
            }
        }
        return true;
    };

    if (isArithmetic(common)) {
        return common[common.length - 1] + (common[1] - common[0]);
    } else {
        return common[common.length - 1] * (common[1] / common[0]);
    }
}