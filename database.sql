PGDMP          9                z            citydata    12.11    12.11                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16410    citydata    DATABASE     �   CREATE DATABASE citydata WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE citydata;
                postgres    false            �            1259    16429    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    16411    type    TABLE     Y   CREATE TABLE public.type (
    ut_id bigint NOT NULL,
    type character varying(255)
);
    DROP TABLE public.type;
       public         heap    postgres    false            �            1259    16424 	   user_type    TABLE     n   CREATE TABLE public.user_type (
    usertype_id bigint NOT NULL,
    type_ut_id bigint,
    user_id bigint
);
    DROP TABLE public.user_type;
       public         heap    postgres    false            �            1259    16416    users    TABLE     (  CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(255),
    enable boolean NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    location character varying(255),
    password character varying(255),
    phone integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false                      0    16411    type 
   TABLE DATA           +   COPY public.type (ut_id, type) FROM stdin;
    public          postgres    false    202   G                 0    16424 	   user_type 
   TABLE DATA           E   COPY public.user_type (usertype_id, type_ut_id, user_id) FROM stdin;
    public          postgres    false    204   x                 0    16416    users 
   TABLE DATA           d   COPY public.users (id, email, enable, first_name, last_name, location, password, phone) FROM stdin;
    public          postgres    false    203   �                  0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 34, true);
          public          postgres    false    205            �
           2606    16415    type type_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.type
    ADD CONSTRAINT type_pkey PRIMARY KEY (ut_id);
 8   ALTER TABLE ONLY public.type DROP CONSTRAINT type_pkey;
       public            postgres    false    202            �
           2606    16428    user_type user_type_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.user_type
    ADD CONSTRAINT user_type_pkey PRIMARY KEY (usertype_id);
 B   ALTER TABLE ONLY public.user_type DROP CONSTRAINT user_type_pkey;
       public            postgres    false    204            �
           2606    16423    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            �
           2606    16431 %   user_type fk91w5lb3u8ewi2uqigl2t7bv7y    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_type
    ADD CONSTRAINT fk91w5lb3u8ewi2uqigl2t7bv7y FOREIGN KEY (type_ut_id) REFERENCES public.type(ut_id);
 O   ALTER TABLE ONLY public.user_type DROP CONSTRAINT fk91w5lb3u8ewi2uqigl2t7bv7y;
       public          postgres    false    2697    204    202            �
           2606    16436 %   user_type fkgx1oa4kbhp6v2h4fkcs86782y    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_type
    ADD CONSTRAINT fkgx1oa4kbhp6v2h4fkcs86782y FOREIGN KEY (user_id) REFERENCES public.users(id);
 O   ALTER TABLE ONLY public.user_type DROP CONSTRAINT fkgx1oa4kbhp6v2h4fkcs86782y;
       public          postgres    false    204    203    2699               !   x�32�,.)MI�+�24�tt�������� Y�         T   x�%���0�w�ĝBz��: �k-yd��j�����ޙ��]�AB٫���Q�&����v�`w�I{Qn���?P<���         �   x���M�0��oN�	�� ��x6-m�Q�X��ۢ��PB3���ח3�+���Щ{����Tsٖ��O�S�W4~����9k��3�#N�.��p(�Sus�''	R�p��X+7ׂI0��~���+Y��w��y0��0�G
��<��$C��_�d�����:�>��%5��6?�{���A�����+��>b{�w,�D�U\��     