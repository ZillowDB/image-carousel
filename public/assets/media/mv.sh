ct=0
for i in `ls *.JPG` ; do
  ct=$((ct + 1))
  mv $i home$ct.jpg
done