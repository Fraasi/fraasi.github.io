const urls = [
  'https://t00.deviantart.net/lKk0vs1o7swbzXiI1Ibv85URpI4=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7096/th/pre/f/2009/183/2/f/krtek_by_doofassi.jpg',
  'https://t00.deviantart.net/jCb5J0JkqMpiqpS0h_ju0im9TsE=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/e139/th/pre/f/2009/225/e/8/re_l_mayer_by_doofassi.jpg',
  'https://t00.deviantart.net/1uO9u8--VRuVJ4TYAoYWu_Txg9U=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/a771/th/pre/f/2010/262/8/a/sunset_at_midsummer_night_by_doofassi-d2z2c8d.jpg',
  'https://t00.deviantart.net/UvlR9bNFgN4_acuxS5GX4tJcNMM=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/2ca9/th/pre/f/2009/203/e/f/betty_the_goji_berry_plant_by_doofassi.jpg',
  'https://t00.deviantart.net/9L03KQed9PcS4tHWcGPDHCyI490=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3ad1/th/pre/f/2009/247/1/9/chekist_by_doofassi.jpg',
  'https://t00.deviantart.net/2TKoP8NsYGsa6vhszqp-hL9QqUA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/87ab/th/pre/f/2010/169/f/6/fat_tree_sparrow_fledgling_by_doofassi.jpg',
  'https://t00.deviantart.net/-YmA_lfwikxBqsAlZ-SJcm2Iw7Y=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/0032/th/pre/f/2009/342/8/a/fluctifracus_by_doofassi.jpg',
  'https://t00.deviantart.net/56XJmgHOrMKDTF8sp1QdG1CLHP4=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/17fd/th/pre/f/2009/163/a/d/sunsetshadowman_by_doofassi.jpg',
  'https://t00.deviantart.net/AFllHOxCe7u5dkNOnrB3HoPbrsA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/4761/th/pre/f/2009/176/d/6/fuzzball_by_doofassi.jpg',
  'https://orig00.deviantart.net/44d2/f/2009/194/8/3/dead_planets_by_doofassi.jpg',
  'https://t00.deviantart.net/8bxxAzRobSKe-hmTIYPuRI7qzwc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/6d5f/th/pre/f/2009/188/6/1/burtonesque_by_doofassi.jpg',
  'https://t00.deviantart.net/iDzct_7nEciwzwm31kU7eCwj7K8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7904/th/pre/f/2009/177/a/a/nell_by_doofassi.jpg',
  'https://t00.deviantart.net/kmDfJwBzf_nVXwFiHGtof4Mlquo=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/d814/th/pre/f/2009/221/3/3/skull_no5_by_doofassi.jpg',
  'https://t00.deviantart.net/KnkXpTHzayAWky1h13tfha7u8Xo=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3ab1/th/pre/f/2012/251/d/5/ishmael_by_doofassi-d5e06vu.jpg',
  'https://t00.deviantart.net/tA9n79AguhBV8W6-chPTMJOFPzs=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/43fb/th/pre/f/2009/174/4/7/hoodie_by_doofassi.jpg',
  'https://t00.deviantart.net/cKMO8tUVU00AtRzZj8U53asL7_Q=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/ec0f/th/pre/f/2009/234/5/b/moonbathing_by_doofassi.jpg',
  'https://t00.deviantart.net/VkLHz0L-lK8cBsIpmmbOezzVxpc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7c1c/th/pre/f/2009/176/b/8/apo_12_by_doofassi.jpg',
  'https://t00.deviantart.net/hBxh57bC_af7i2KQfGn417efoJc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/d291/th/pre/f/2009/290/3/4/pot_marigold_petals_by_doofassi.jpg',
  'https://t00.deviantart.net/HPkhKHfXoyAxpWZqH_3aepALmA0=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/8cc0/th/pre/f/2010/197/c/4/julie_by_doofassi.jpg',
  'https://t00.deviantart.net/Yft5d2AeuOuPIrQjt3SGcs2Bok8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3f54/th/pre/f/2009/311/f/b/frozen_siberian_tea_leaf_by_doofassi.jpg',
  'https://t00.deviantart.net/t9DK3i_iT1CpubkhxKs54wyESP8=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/f922/th/pre/f/2009/196/2/8/bill_hicks_quick_sketch_by_doofassi.jpg',
]

const randomUrl = Math.floor(Math.random() * urls.length)

export default function getDAUrl() {
  return urls[randomUrl]
}
