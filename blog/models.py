from django.db import models

# Create your models here.
# title
# pub_date
# body
# image

class Blog(models.Model):
  title = models.CharField(max_length=255)
  pub_date = models.DateTimeField()
  body = models.TextField()
  image = models.ImageField(upload_to='images/', blank=True)

  def __str__(self):
    return self.title

  def summary(self):
    return self.first_words(self.body, 30)

  def first_words(self, input, words):
    for i in range(0, len(input)):
        # Count spaces in the string.
        if input[i] == ' ':
            words -= 1
        if words == 0:
            # Return the slice up to this point.
            return input[0:i] + '...'
    return input

  def pub_date_pretty(self):
    return self.pub_date.strftime('%y.%m.%d')
  
  class Meta:
    ordering = ["-pub_date"]