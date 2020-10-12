-XX:+PrintGCTimeStamps
-XX:+PrintGCDetails
-Xloggc:/opt/app/gc.log
-XX:+UseGCLogFileRotation
-XX:NumberOfGCLogFiles=10
-XX:GCLogFileSize=50M
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=./java_pid<pid>.hprof
-XX:+UseStringDeduplication
-XX:+HeapDumpOnOutOfMemoryError="shutdown -r"


## JAVA 11 Unified logging

  JAVA_OPTS: -XX:+PrintGCDetails -Xlog:gc*:file=/tmp/gc-%p-%t.log:tags,uptime,time,level:filecount=10,filesize=50m  -XX:+HeapDumpOnOutOfMemoryError  -XX:HeapDumpPath=/tmp/java_pid.hprof
    -XX:+UseStringDeduplication "
  JAVA_TOOL_OPTIONS: -javaagent:/app/lib/elastic-apm-agent.jar
