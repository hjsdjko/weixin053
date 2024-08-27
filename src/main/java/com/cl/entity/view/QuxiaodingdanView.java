package com.cl.entity.view;

import com.cl.entity.QuxiaodingdanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 取消订单
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-13 14:51:26
 */
@TableName("quxiaodingdan")
public class QuxiaodingdanView  extends QuxiaodingdanEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public QuxiaodingdanView(){
	}
 
 	public QuxiaodingdanView(QuxiaodingdanEntity quxiaodingdanEntity){
 	try {
			BeanUtils.copyProperties(this, quxiaodingdanEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
