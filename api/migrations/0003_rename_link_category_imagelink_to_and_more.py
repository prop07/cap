# Generated by Django 4.0.4 on 2022-05-11 04:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_vendorid'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='link',
            new_name='imageLink_to',
        ),
        migrations.RenameField(
            model_name='categoryproduct',
            old_name='link',
            new_name='imageLink_to',
        ),
        migrations.RenameField(
            model_name='productimage',
            old_name='link',
            new_name='imageLink_to',
        ),
        migrations.RenameField(
            model_name='slider',
            old_name='link_to',
            new_name='imageLink_to',
        ),
    ]
