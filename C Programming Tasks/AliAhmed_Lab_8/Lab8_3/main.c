#include <stdio.h>
#include <stdlib.h>
typedef struct Subject{
    int subjectno;
    int degree;
}Subject;
typedef struct student{
    int stno;
    Subject subject;
}student;

int main()
{
    //3. C Program to calculate sum of student degrees, and average of each subject, asks the user for students and subject numbers. (Dynamic Allocation of 2D Array - Pointer to Pointer)
    //student st;
    int row=0,col=0;
    int i=0,j=0;

    float *sumArr=(float *) malloc(sizeof(float));
    float *avgArr=(float *) malloc(sizeof(float));
    //student number
    printf("Enter no. of Student you want to add (rows) : ");
    scanf("%d",&row);
    //subject no. and degree
    printf("Enter no. of Subjects for each student (columns) : ");
    scanf("%d",&col);
    student **st_ptr=(student **)malloc(row*sizeof(student *));
    for(i=0; i<row; i++){
        st_ptr[i]=(student *) malloc(col * sizeof(student ));
    }
        for(i=0; i<row; ++i){

                printf("Enter student number [%d] : ",i+1);
                scanf("%d",&st_ptr[i][j].stno);
         for(j=0; j<col; j++){

                printf("Enter student subject number [%d] [%d] : ",i+1,j+1);
                scanf("%d",&st_ptr[i][j].subject.subjectno);
                printf("Enter student degree in subjects [%d] [%d] : ",i+1,j+1);
                scanf("%d",&st_ptr[i][j].subject.degree);
                sumArr[i]=sumArr[i]+st_ptr[i][j].subject.degree;
                avgArr[i]=sumArr[i]/col;

        }
   }

        for(i=0; i<row; i++){
            printf("//////////////////////---------------------------//////////////////////////// \n");
            printf("student number : %d \n",st_ptr[i][j].stno);
            for(j=0; j<col; j++){

                printf("student subject number : %d \t",st_ptr[i][j].subject.subjectno);
                printf("student degree : %d \n",st_ptr[i][j].subject.degree);
            }
            printf("total Subject degrees of this student [%d] = %f  \n",i+1,sumArr[i]);
            printf("Average Subject degrees of this student [%d] = %f  \n",i+1,avgArr[i]);

        }
    return 0;
}
