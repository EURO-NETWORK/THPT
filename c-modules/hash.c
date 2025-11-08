#include <stdio.h>
#include <string.h>

unsigned int hash(const char *str) {
    unsigned int h = 0;
    while (*str) {
        h = (h << 5) + h + *str;
        str++;
    }
    return h;
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <string>\n", argv[0]);
        return 1;
    }

    printf("Hash: %u\n", hash(argv[1]));
    return 0;
}
