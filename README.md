# NodejsUfop

可以将源码src和ufop.yaml 下载到本地的一个目录, 然后按照ufop的部署方式部署成功后就可以通过ufop来访问了，以下是具体步骤以及最后的效果图:

1.qufopctl reg helloworld123 -mode 1 -desc Test

2.qufopctl build helloworld123 -dir ufoptest

3.qufopctl resize helloworld123 -num 2

![这里写图片描述](https://o10doo04h.qnssl.com/blob.png)
