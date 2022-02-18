#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *rear = NULL, *front = NULL;

void enqueue(int val)
{
    struct node *newnode = malloc(sizeof(struct node));
    newnode->data = val;
    if (front == NULL && rear == NULL)
    {
        front = rear = newnode;
    }
    else
    {
        rear->next = newnode;
        rear = newnode;
    }
}

void dequeue()
{
    struct node *temp;
    if (front == NULL)
    {
        printf("Queue is empty\n");
    }
    else
    {
        printf("Dequeued value %d\n", front->data);
        temp = front;
        front = front->next;

        if (front == NULL)
            rear = NULL;

        free(temp);
    }
}

int main()
{
    dequeue();
    enqueue(10);
    enqueue(20);
    enqueue(30);
    dequeue();
    dequeue();
    dequeue();
    dequeue();
    return 0;
}