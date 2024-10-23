#include <stdio.h>
#include <string.h>

int main()
{
    char str[] = "hello";
    int freq[256] = {0};
    int len = strlen(str);

    for (int i = 0; i < len; i++)
    {
        freq[str[i]]++;
    }

    for (int i = 0; i < len; i++)
    {
        if (freq[str[i]] == 1)
        {
            printf("unique character is at: %d\n", i);
            return 0;
        }asdaasssssssschlyhrabhvhjghffdftfvbgh
    }

    return 0;
}