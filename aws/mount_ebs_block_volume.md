### Guide to attach EBS block volume to EC2

- Create a EBS volume ( Ensure volume can be attached to the instance present in the same availability zone)

- Log into EC2 instance and mount the volume 

```
# check the existing bulk volumes

$ lsblk 

## format the filesystem to support ext4 

$ sudo mkfs -t ext4 /dev/xvdf 
```

- Mount the volume to the directory

```
$ mkdir /app
$ sudo mount /dev/xvdf /app
```

By default on every reboot the  EBS volumes other than root volume will get unmounted. To enable automount, you need to make an entry in the /etc/fstab file.

<b>EBS automount on restart</b>: 

- Back up the /etc/fstab file.
```
$ sudo cp /etc/fstab /etc/fstab.bak
```
- Open /etc/fstab file and make an entry in the following format.

```
## below syntax
# device_name mount_point file_system_type fs_mntops fs_freq fs_passno

/dev/xvdf       /app   ext4    defaults,nofail   
```

- Execute the following command to check id the fstab file has any error.

```
$ sudo mount -a
```
