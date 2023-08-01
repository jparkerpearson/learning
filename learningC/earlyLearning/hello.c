#include <stdio.h>

#define NUM_CHARS_TO_READ 5

int readInputNumber(int something);
int convertToCelcius(int farhenheit);

int main(int argc, char *argv[])
{

   char readCharacters[NUM_CHARS_TO_READ];
   int i = 0;

   for (i = 0; i < NUM_CHARS_TO_READ; i++) {
      int p = 0;
      readCharacters[i] = getchar();
   }

   for (i = 0; i < NUM_CHARS_TO_READ; i++) {
      printf("%c", readCharacters[i]);
   }
   
   // printf("%c\n", randomChar);
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