function solution(rank, attendance) {
    // 학생들의 등수와 참석 가능 여부를 결합하여 객체 배열 생성
    const students = rank.map((r, index) => ({ rank: r, num: index, canAttend: attendance[index] }));
    
    // 참석 가능한 학생들만 필터링하고, 등수에 따라 정렬
    const attendableStudents = students.filter(student => student.canAttend)
                                        .sort((a, b) => a.rank - b.rank);
    
    // 상위 3명의 학생 번호를 추출
    const topThree = attendableStudents.slice(0, 3).map(student => student.num);
    
    // 결과 계산
    const answer = 10000 * topThree[0] + 100 * topThree[1] + topThree[2];
    return answer;
}
