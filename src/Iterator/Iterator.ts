/**
 * Iterator interface
 * next() - Iterator 인터페이스를 통해서 Aggregator의 다음 구성 요소를 다음 구성요소를 얻을 수 있도록 하고 다음 구성 데이터를 얻을 수 있다면 true를 반환하고, 더 이상 구성 데이터가 없다면 false를 반환한다.
 * current() - 구성 데이터를 하나 얻어서 반환한다.
 */

interface Iterator<T> {
  next(): boolean;
  current(): T;
}

export default Iterator;
