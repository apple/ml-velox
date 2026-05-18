# Velox: Learning Representations of 4D Geometry and Appearance

This website accompanies the research paper: 

**Velox: Learning Representations of 4D Geometry and Appearance, CVPR 2026.**<br>
[Anagh Malik](https://anaghmalik.com), [Dorian Chan](https://dorianchan.com/), [Xiaoming Zhao*](https://xiaoming-zhao.com/), [David B. Lindell](https://davidlindell.com), [Oncel Tuzel](https://www.onceltuzel.net),  [Jen-Hao Rick Chang*](https://rick-chang.github.io)


<p align="center"><a href="https://arxiv.org/abs/2605.04527"><img src='https://img.shields.io/badge/arXiv-Paper-red?logo=arxiv&logoColor=white' alt='arXiv'></a>
<a href='https://apple.github.io/ml-velox/'><img src='https://img.shields.io/badge/Project_Page-Website-green?logo=googlechrome&logoColor=white' alt='Project Page'></a>

## Abstract

We introduce a framework for learning latent representations of 4D objects which are descriptive, faithfully capturing object geometry and appearance; compressive, aiding in downstream efficiency; and accessible, requiring minimal input, i.e., an unstructured dynamic point cloud, to construct. Specifically, Velox trains an encoder to compress spatiotemporal color point clouds into a set of dynamic tokens. These tokens are supervised using two complementary decoders: a 4D surface decoder, which models the time-varying surface distribution capturing the geometry; and a Gaussian decoder, which maps the tokens to 3D Gaussians, helping learn appearance. To demonstrate the utility of our representation, we evaluate it across three downstream tasks—video-to-4D generation, 3D tracking, and cloth simulation via image-to-4D generation—and observe strong performances in all settings. Please see the [website](https://apple.github.io/ml-velox/) for video results.

## License

- Repository is released under [LICENSE](./LICENSE). 
- All generated samples provided here are licensed under [LICENSE_generated_samples](LICENSE_DATA).

## Acknowledgements

Our codebase is built using multiple opensource contributions, please see [ACKNOWLEDGEMENTS](./ACKNOWLEDGEMENTS) for more details.


## Citations

```
@inproceedings{malik2025velox,
  author    = {Malik, Anagh and Chan, Dorian and Zhao, Xiaoming and Lindell, David B. and Tuzel, Oncel and Chang, Jen-Hao Rick},
  title     = {Velox: Learning Representations of 4D Geometry and Appearance},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2026}
}
```