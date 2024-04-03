function solution(name, yearning, photo) {
    let answer = [];
    // 이름과 그리움 점수를 매핑하는 객체 생성
    const scoreMap = {};
    name.forEach((n, index) => scoreMap[n] = yearning[index]);

    // 각 사진별로 그리움 점수 합산
    photo.forEach(p => {
        let photoScore = 0; // 현재 사진의 추억 점수
        p.forEach(person => {
            if (scoreMap[person] !== undefined) { // 사진 속 인물이 그리움 점수 맵에 있으면
                photoScore += scoreMap[person]; // 점수 추가
            }
        });
        answer.push(photoScore);
    });

    return answer;
}
