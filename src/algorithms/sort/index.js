function ArrayList() {
  this.array = [];

  ArrayList.prototype.insert = function (item) {
    this.array.push(item);
  };

  ArrayList.prototype.toString = function (separator) {
    return this.array.join(separator);
  };

  /**
   * 交换两数位置
   * @param {*} m
   * @param {*} n
   */
  ArrayList.prototype.swap = function (m, n) {
    const temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  };

  /**
   * 冒泡排序
   */
  ArrayList.prototype.bubbleSort = function () {
    const len = this.array.length;

    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  };

  /**
   * 选择排序
   */
  ArrayList.prototype.selectionSort = function () {
    const len = this.array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (this.array[minIndex] > this.array[j]) {
          minIndex = j;
        }
      }
      this.swap(minIndex, i);
    }
  };

  /**
   * 插入排序
   */
  ArrayList.prototype.insertionSort = function () {
    const len = this.array.length;
    // 从第二个元素开始
    for (let i = 1; i < len; i++) {
      let j = i;
      // 保存当前元素
      let temp = this.array[i];
      // 从后往前循环，将大于temp的所有元素向后移动，while控制循环的边界
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1];
        j--;
      }
      // 将temp插入到指定位置
      this.array[j] = temp;
    }
  };
}

const arrayList = new ArrayList();
arrayList.insert(3);
arrayList.insert(1);
arrayList.insert(13);
arrayList.insert(5);
arrayList.insert(7);
arrayList.insert(9);
arrayList.insert(2);
arrayList.insert(6);
arrayList.insert(4);
// arrayList.bubbleSort();
arrayList.selectionSort();
// arrayList.insertionSort();

console.log(arrayList.toString("->")); // 3,1,2
