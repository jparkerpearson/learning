#include <stdio.h>
#include <stdbool.h>

#define MAXLINE 1000
#define LINES_TO_READ = 

void readLine(char line[], int maxLine);

int main() {

   char name[] = "Parker" ;
    // printf("name :%d \n", name);
    // printf("name address%d \n", &name);

   // & goes from value to pointer
   // * goes from pointer to value

    int something = 2;
    int *somethingPointer = &something;
    int somethingElse = *somethingPointer;
    int aThirdSomething = &somethingPointer;

    printf("something :%d \n", something);
    printf("something pointer%d \n", somethingPointer);
    printf("something else :%d \n", somethingElse);
    printf("third something :%d \n", aThirdSomething);




    // store longest line
    // int longestLineLength = 36;
    // char longestLine[MAXLINE];

    // int *longestLineLengthPointer = &longestLineLength;
    // int copyLongestLineLength = *longestLineLengthPointer;

    // printf("Longest Line length address: 0b%d \n", longestLineLengthPointer);
    // printf("Longest line length: %d \n", *longestLineLengthPointer);
    // printf("Copy Longest line length: %d \n", *longestLineLengthPointer);

    // longestLineLengthPointer += 1;
    // printf("Longest Line length address: %d \n", longestLineLengthPointer);

    // longestLineLengthPointer -= 1;
    // printf("Longest Line length address: %d \n", longestLineLengthPointer);

    // readLine(longestLine, MAXLINE);


    // for (int i = 0; i < MAXLINE; i++) {
    //     char currentChar = longestLine[i];

    //     if (currentChar == '\0') {
    //         break;
    //     }

    //     printf("%c", longestLine[i]);
    // }


    

    


    // while still inputing a line read line
    // if line is longer than longest line set it

    // print longest line

    // printf("Hello, World!\n");
    // read a line
}


 void readLine(char line[], int maxLine) { 
    int i = 0;


    // if we've read max line 

    bool shouldBreak = false;

    while (i < maxLine) {
        char c = getchar();

        line[i] = c;

        if (c == EOF) {
            shouldBreak = true;
        }

        if (c== '\n') {
            shouldBreak = true;
        }

        i++;

        if (shouldBreak) {
            break;
        }
    }

    if (i == maxLine) {
        line[i - 1] = '\0';
    } else  {
        line[i] = '\0';
    }

 }

