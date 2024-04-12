function solution(progresses, speeds) {
    let answer = [];
    let days = progresses.map((progress, index) => {
        return Math.ceil((100 - progress) / speeds[index]); // 각 기능이 완성되기까지 남은 일수 계산
    });

    let currentMaxDay = days[0]; // 첫 번째 기능의 완성 일수를 초기 최대일로 설정
    let count = 0; // 현재 배포 묶음에 포함된 기능의 수

    days.forEach(day => {
        if (day > currentMaxDay) {
            // 현재 기능의 완성 일수가 현재 최대 완성 일수보다 크다면, 새로운 배포 묶음 시작
            answer.push(count);
            count = 1; // 현재 기능을 새 배포 묶음의 첫 기능으로 시작
            currentMaxDay = day; // 최대 완성 일수 업데이트
        } else {
            // 현재 기능을 현재 배포 묶음에 추가
            count++;
        }
    });

    // 마지막 배포 묶음 추가
    answer.push(count);
    
    return answer;
}
