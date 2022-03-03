#include<stdio.h>

# define SIZE 5

int linearSearch(int arr[],int key,int size){
    int i ;
    for(i=0;i<size; i++ )
        if(arr[i]==key)
            return 1;
     return 0;
    
}

int main(){
    int paper_size[SIZE]={85,65,32,45,78};
   
    int key;

    printf("enter the key :");
    scanf("%d",&key);
    
    if(linearSearch(paper_size,key,SIZE)==1)
        printf("search found");
        else
            printf("not such element");

    return 0;



}