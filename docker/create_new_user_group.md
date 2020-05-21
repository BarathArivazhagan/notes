ARG UNAME=test
ARG UID=1001010000
ARG GID=1001010000
RUN groupadd -g $GID -o $UNAME
RUN useradd -m -l -u $UID -g $GID -o -s /bin/bash $UNAME

RUN chmod -R 755 /app
USER $UNAME
