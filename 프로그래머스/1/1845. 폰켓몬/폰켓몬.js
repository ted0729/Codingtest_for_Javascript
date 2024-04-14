function solution(nums) {
    const N = nums.length; // 폰켓몬의 총 수
    const canSelect = N / 2; // 선택할 수 있는 폰켓몬의 수
    
    // Set을 사용하여 폰켓몬 종류의 수를 카운트
    const uniqueTypes = new Set(nums);
    
    // 선택할 수 있는 최대 폰켓몬 종류의 수는 uniqueTypes의 크기와 canSelect 중 더 작은 값
    return Math.min(uniqueTypes.size, canSelect);
}
