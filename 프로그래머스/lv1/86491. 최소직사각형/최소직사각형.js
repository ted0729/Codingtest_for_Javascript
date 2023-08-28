function solution(sizes) {
    let maxWidth = 0
    let maxHeight = 0;
                            
    sizes.forEach((size) => {
        size.sort((a, b) => a - b); // 오름차순을 해줘야 무조건 [0]에는 작은값이 [1]에는 큰값이 들어간다.
        
        let [width, height] = size; // 배열 구조분해할당을 해서 (배열을 해체)
                                    // size[0]->width size[1]->height 값을 집어넣고
        if (maxWidth < width) maxWidth = width;
        if (maxHeight < height) maxHeight = height;
    })
    
    return maxWidth * maxHeight;
}

// 배열 요소들은 앞뒤를 바꿔서 가로 세로를 바꿀수 있다.
// 그래서 가로값이나 세로값은 값을 뒤집었을때
// 모든(가로나 세로) 값을 수용할수있는 최대값을 찾아야한다.

// 간단하게 말하면 가로값의 최대값 세로값의 최대값을 찾는것..