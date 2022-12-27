#include <stdio.h>
#include <time.h>
#define MIN 60
#define HOUR (60*MIN)
#define DAY (24L*HOUR)
#define WEEK (7L*DAY)
#define MONTH (3042LL*DAY/100)
#define YEAR (365LL*DAY)

int main() {
  printf("Since 01/Jan/1970:\n");
  time_t now = time(NULL);
  long timeleft = now;
  long years=timeleft/YEAR;
  long months=(timeleft % YEAR)/MONTH;
  long weeks=(timeleft % MONTH)/WEEK;
  long days=(timeleft % WEEK)/DAY;
  long hours=(timeleft % DAY)/HOUR;
  printf("Passed years : %d | months : %d | weeks : %d | days : %d | hours : %d\n", years , months, weeks,days,hours);
  return 0;
}
