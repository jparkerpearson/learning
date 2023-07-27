#include <stdio.h>

#define MAGIC_NUMBER 13

int readInputNumber(int something);
int convertToCelcius(int farhenheit);

int main(int argc, char *argv[])
{

   char randomChar = getchar();
   printf("%c\n", randomChar);
   // int randomNumber = 5;
   // print argc
   // printf("argc = %d\n", argc);
   // printf("%d\n", randomNumber);
   // printf("Hello, World!\n");

   // printf("%d\n", MAGIC_NUMBER);
   
 
   return 0;
}


int convertToCelcius(int farhenheit) {
   return (farhenheit - 32) * 5 / 9;
}

int readInputNumber(int something) {
      int number;
      printf("Enter a number: ");
      scanf("%d", &number);
      return number;
}