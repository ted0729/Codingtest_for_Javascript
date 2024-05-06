function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0이면 모든 접근은 미스

    let answer = 0;
    let cache = new Map(); // Map을 사용하여 캐시 구현 (key는 도시 이름, value는 최근 사용 시간)

    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase(); // 대소문자 구분 없이 처리하기 위해 소문자로 변환
        if (cache.has(city)) {
            answer += 1; // 캐시 히트
        } else {
            if (cache.size === cacheSize) {
                // 캐시가 꽉 찼다면, 가장 오래된 아이템을 제거
                let oldestKey = null;
                let oldestValue = Number.MAX_SAFE_INTEGER;
                for (let [key, value] of cache) {
                    if (value < oldestValue) {
                        oldestKey = key;
                        oldestValue = value;
                    }
                }
                cache.delete(oldestKey);
            }
            answer += 5; // 캐시 미스
        }
        // 현재 도시를 캐시에 추가하거나 업데이트 (현재 인덱스를 시간으로 사용)
        cache.set(city, i);
    }
    
    return answer;
}