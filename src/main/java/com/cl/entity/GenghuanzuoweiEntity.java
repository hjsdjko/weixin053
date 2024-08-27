package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 更换座位
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-13 14:51:25
 */
@TableName("genghuanzuowei")
public class GenghuanzuoweiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public GenghuanzuoweiEntity() {
		
	}
	
	public GenghuanzuoweiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 自习室名称
	 */
					
	private String zixishimingcheng;
	
	/**
	 * 自习室位置
	 */
					
	private String zixishiweizhi;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 开放时间
	 */
					
	private String kaifangshijian;
	
	/**
	 * 座位号
	 */
					
	private String zuoweihao;
	
	/**
	 * 新座位号
	 */
					
	private String xinzuoweihao;
	
	/**
	 * 自习室类型
	 */
					
	private String zixishileixing;
	
	/**
	 * 用户账号
	 */
					
	private String yonghuzhanghao;
	
	/**
	 * 用户姓名
	 */
					
	private String yonghuxingming;
	
	/**
	 * 更换时间
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 		
	private Date genghuanshijian;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：自习室名称
	 */
	public void setZixishimingcheng(String zixishimingcheng) {
		this.zixishimingcheng = zixishimingcheng;
	}
	/**
	 * 获取：自习室名称
	 */
	public String getZixishimingcheng() {
		return zixishimingcheng;
	}
	/**
	 * 设置：自习室位置
	 */
	public void setZixishiweizhi(String zixishiweizhi) {
		this.zixishiweizhi = zixishiweizhi;
	}
	/**
	 * 获取：自习室位置
	 */
	public String getZixishiweizhi() {
		return zixishiweizhi;
	}
	/**
	 * 设置：图片
	 */
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
	/**
	 * 设置：开放时间
	 */
	public void setKaifangshijian(String kaifangshijian) {
		this.kaifangshijian = kaifangshijian;
	}
	/**
	 * 获取：开放时间
	 */
	public String getKaifangshijian() {
		return kaifangshijian;
	}
	/**
	 * 设置：座位号
	 */
	public void setZuoweihao(String zuoweihao) {
		this.zuoweihao = zuoweihao;
	}
	/**
	 * 获取：座位号
	 */
	public String getZuoweihao() {
		return zuoweihao;
	}
	/**
	 * 设置：新座位号
	 */
	public void setXinzuoweihao(String xinzuoweihao) {
		this.xinzuoweihao = xinzuoweihao;
	}
	/**
	 * 获取：新座位号
	 */
	public String getXinzuoweihao() {
		return xinzuoweihao;
	}
	/**
	 * 设置：自习室类型
	 */
	public void setZixishileixing(String zixishileixing) {
		this.zixishileixing = zixishileixing;
	}
	/**
	 * 获取：自习室类型
	 */
	public String getZixishileixing() {
		return zixishileixing;
	}
	/**
	 * 设置：用户账号
	 */
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
	/**
	 * 设置：用户姓名
	 */
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
	/**
	 * 设置：更换时间
	 */
	public void setGenghuanshijian(Date genghuanshijian) {
		this.genghuanshijian = genghuanshijian;
	}
	/**
	 * 获取：更换时间
	 */
	public Date getGenghuanshijian() {
		return genghuanshijian;
	}

}
